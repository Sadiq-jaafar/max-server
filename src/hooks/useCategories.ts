import useData from "./useData";


export interface Categories{
    id: string
    type: string

}
 export interface Props{
    category:Categories
}


const useCategories = ({category}:Props)=> useData<Categories>('/media')
// {params: {Categories: selectedCategory}})

export default useCategories