import NewsItem from "./NewsItem";

export default ({data,handleShowDetails}) =>{
    return data.map(item => <NewsItem key={item.id} data={item} handleShowDetails={handleShowDetails}/>)
}