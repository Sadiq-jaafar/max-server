import useData from "./useData";
interface Snippet {
    title: string;
}
export interface Categories{
    id: string
    snippet: Snippet;

}


const useCategories = ()=> useData<Categories>('/videoCategories')

export default useCategories