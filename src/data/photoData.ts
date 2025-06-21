import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";
import pic7 from "../assets/pic7.jpeg";
import pic8 from "../assets/pic8.jpeg";
import pic9 from "../assets/pic9.jpeg";

export interface Photo {
  id: number;
  url: string;
  caption: string;
}

// Sample photo data with Pexels images (free to use)
export const photoData: Photo[] = [
  {
    id: 1,
    url: pic8,
    caption: "Happy moments with family"
  },
  {
    id: 2,
    url: pic1,
    caption: "Some bonds don’t need words — just one look says it all."
  },
  {
    id: 3,
    url: pic3,
    caption: "Little queen energy since day one 👑✨"
  },
  {
    id: 4,
    url: pic4,
    caption: "A rose on the table, and one sitting right next to it 🌹"
  },
  {
    id: 5,
    url: pic5,
    caption: "Two heads, one vibe.✨”"
  },
  {
    id: 6,
    url: pic6,
    caption: "Black outfits, bold hearts 🖤"
  },
  {
    id: 7,
    url: pic7,
    caption: "Celebrating with friends"
  },
  {
    id: 8,
    url: pic2,
    caption: "To the world, she might be someone. To me, she’s everything."
  },
  {
    id: 9,
    url: pic9,
    caption: "Wrapped in culture, glowing in golden hour 🌼📸"
  }
];