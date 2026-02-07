export class Analyzer {
  constructor() {
    this.stats = {
      ERROR: 0,
      WARN: 0,
      INFO: 0,
      total: 0
    }
  }

  analyze(line) {
    this.stats.total++

    if (line.includes("ERROR")) this.stats.ERROR++
    else if (line.includes("WARN")) this.stats.WARN++
    else this.stats.INFO++
  }

  printStats() {
    console.clear()
    console.log("📊 LogSnap — Live Stats\n")
    console.log(`🔥 Errors: ${this.stats.ERROR}`)
    console.log(`⚠️ Warnings: ${this.stats.WARN}`)
    console.log(`ℹ️ Info: ${this.stats.INFO}`)
    console.log(`📦 Total lines: ${this.stats.total}`)
    console.log("\n--- Watching logs ---\n")
  }
}
