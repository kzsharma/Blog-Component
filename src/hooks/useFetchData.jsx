import axios from 'axios';
import {useState,useEffect} from 'react'
export default function useFetchData() {
    const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("https://www.aonflow.com/blog/wp-json/wp/v2/posts")
    .then((res) => setList(res.data));
  }, [list]);
  return list
}
