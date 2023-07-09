
export interface ICard {
  id: string;
  flipped?: boolean;
  // back: string;
  back: "react" | 
        "typescript" | 
        "git" | 
        "nodejs" | 
        "javascript" | 
        "vitejs" | 
        "html5" | 
        "css3" | 
        "vuejs" | 
        "angular";
}