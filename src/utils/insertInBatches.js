module.exports = async function insertInBatches(model, documents, batchSize = 1000) {
    for (let i = 0; i < documents.length; i += batchSize) {
      const batch = documents.slice(i, i + batchSize);
      try {
        await model.insertMany(batch);
        console.log(`Inserted batch ${i / batchSize + 1}`);
      } catch (err) {
        console.error(`Error inserting batch ${i / batchSize + 1}:`, err);
      }
    }
}