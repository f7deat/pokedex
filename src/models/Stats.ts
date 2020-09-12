export default interface Stats {
    base_stat: number;
    effort: number; 
    stat: Stat;
}

interface Stat {
    name: string;
    url: string;
}