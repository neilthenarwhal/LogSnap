import fs from "fs"

export function watchLog(file, onLine) {
  let size = fs.statSync(file).size

  fs.watchFile(file, { interval: 500 }, () => {
    const newSize = fs.statSync(file).size
    if (newSize > size) {
      const stream = fs.createReadStream(file, {
        start: size,
        end: newSize
      })

      stream.on("data", chunk => {
        chunk
          .toString()
          .split("\n")
          .filter(Boolean)
          .forEach(onLine)
      })

      size = newSize
    }
  })
}
