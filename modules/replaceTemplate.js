module.exports = (temp, art) => {
  let output = temp.replace(/{%IMAGE%}/g, art.image);
  output = output.replace(/{%PAINTINGNAME%}/g, art.paintingName);
  output = output.replace(/{%ARTIST%}/g, art.artist);
  output = output.replace(/{%ESTIMEATEDDATE%}/g, art.estimatedDate);
  output = output.replace(/{%PLACE%}/g, art.place);
  output = output.replace(/{%HIDDENFACT%}/g, art.hiddenFact);
  output = output.replace(/{%DESCRIPTION%}/g, art.description);
  output = output.replace(/{%ID%}/g, art.id);
  return output;
};
