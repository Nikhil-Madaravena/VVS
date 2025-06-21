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
    url: pic1,
    caption: "Happy moments with friends"
  },
  {
    id: 2,
    url: pic2,
    caption: "Birthday cake with candles"
  },
  {
    id: 3,
    url: pic3,
    caption: "Party time with balloons"
  },
  {
    id: 4,
    url: pic4,
    caption: "Blowing out the candles"
  },
  {
    id: 5,
    url: pic5,
    caption: "Making a birthday wish"
  },
  {
    id: 6,
    url: pic6,
    caption: "Special memories together"
  },
  {
    id: 7,
    url: pic7,
    caption: "Beautiful birthday flowers"
  },
  {
    id: 8,
    url: pic8,
    caption: "Gifts and surprises"
  },
  {
    id: 9,
    url: pic9,
    caption: "Party decorations"
  }
];