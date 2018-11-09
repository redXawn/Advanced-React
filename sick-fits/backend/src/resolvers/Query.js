const Query = {
  dogs(parent, args, context, info) {
    global.dogs = global.dogs || [];
    console.log('dogs', global.dogs)
    return global.dogs;
  }
};

module.exports = Query;
