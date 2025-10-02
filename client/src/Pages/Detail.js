import HttpServices from "../Api/http";

const detailPage = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  console.log(id, "asdadasd");
  const api = new HttpServices("http://localhost:1337/api/");
  api.getData(`/products?filters[id]=${id}populate=*`).then((res) => {
    console.log(res);
  });
};

export default detailPage;
