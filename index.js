import fs from "fs"
import { watchLog } from "./watcher.js"
import { Analyzer } from "./analyzer.js"

if (!fs.existsSync("config.json")) {
  console.error("❌ config.json missing")
  process.exit(1)
}

const config = JSON.parse(fs.readFileSync("config.json"))
const analyzer = new Analyzer()

console.log("🚀 LogSnap started\n")

watchLog(config.logFile, line => {
  analyzer.analyze(line)
  analyzer.printStats()

  if (config.keywords.some(k => line.includes(k))) {
    console.log(`🔥 ${line}`)
  }
})
