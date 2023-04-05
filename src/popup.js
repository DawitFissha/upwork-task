export function saveSecretfromChrome(){
    chrome.storage.sync.set({
        "chromeSecret":'chrome secret'
      }).then(()=>console.log(`secret is set`))
}
export function getSecretFromChrome(){
saveSecretfromChrome()
const secretFromChorme = chrome.storage.sync.get(["chromeSecret"]).then(result=>result["chromeSecret"])
return secretFromChorme
}