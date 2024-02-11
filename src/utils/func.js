async function imageToPreview(file) {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  const data = new Promise((res, rej) => {
    fileReader.onload = () => {
      res(fileReader.result);
      fileReader.onerror = (err) => rej(err);
    };
  });

  return data;
}

export default imageToPreview;
