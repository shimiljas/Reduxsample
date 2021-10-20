export const postdetail=(id)=>{
   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res=>res.json())
         .then(response=>{
            return response
         })
         .catch(err=>{
            return err
     })
}