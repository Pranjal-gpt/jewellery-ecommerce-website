const collectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
  });
  const Collection = mongoose.model('Collection', collectionSchema);
  
  module.exports = Collection;