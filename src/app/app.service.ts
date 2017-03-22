export class AppService {
    getTab(){
        let tabInfo = [
            {title:"Home Health & Residential",route:"amb/hhc", active:true },
            {title:"DME",route:"amb/dme",active:false},
            {title:"Travel",route:"amb/travel",active:false},
            {title:"Transplants",route:"amb/transplats",active:false}
        ]
        return tabInfo;
    }
}