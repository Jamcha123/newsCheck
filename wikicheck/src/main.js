import './style.css'
import axios from 'axios'
import { GoogleGenAI } from '@google/genai'
import {AzureKeyCredential} from '@azure/core-auth'
import ModelClient, {isUnexpected} from '@azure-rest/ai-inference'

const ai = new ModelClient("https://aistudioaiservices308224805493.services.ai.azure.com/models", new AzureKeyCredential(""))

chrome.tabs.query({active: true, lastFocusedWindow: true}, async (tabs) => {
  const link = new URL(tabs[0]["url"])
  if(((link.hostname).split("."))[1] != "wikipedia"){
    alert("the tab isn't an wikipedia article")
    return
  }
  alert("be patient with the AI, it takes a while to fact check the article, now just click ok and wait ")
  const target = (((new URL(tabs[0]["url"])).pathname).split("/"))[2]
  const article = "https://en.wikipedia.org/w/rest.php/v1/page/" + target
  const webby = (await axios.get(article))["data"]
  
  const search = "https://www.googleapis.com/customsearch/v1?key=&cx=53b4f01c6912d484d&q=" + webby["title"]
  const searches = (await axios.get(search))["data"]["items"]
  let ans = ""
  for(let i = 0; i != searches.length; i++){
    ans += searches[i]["title"] + " " + searches[i]["snippet"]
  } 
  const response = await ai.path("/chat/completions").post({
    body: {
      model: "DeepSeek-V3-0324",
      messages: [
        {role: "user", content: "fact check and summarize this wikipedia article: " + webby["source"] + " called " + webby["title"] + " using these google searches: " + ans + " in a short summary (100 words or less)"}
      ],
      max_tokens: 2048,
      temperature: 0.8,
      top_p: 0.1,
    }
  })
  if (response.status !== "200") {
    alert((response.body.error)["message"] + "\nsorry, this wikipedia article cannot be fact checked");
    return
  }
  alert(response.body.choices[0].message.content)
})