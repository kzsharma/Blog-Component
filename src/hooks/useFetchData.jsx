import {React,useState,useEffect} from 'react'

export default function useFetchData() {
    const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://www.aonflow.com/blog/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((res) => setList(res));
  }, [list]);
  return list
}
