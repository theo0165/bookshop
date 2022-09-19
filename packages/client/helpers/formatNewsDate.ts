const days = ["sön", "mån", "tis", "ons", "tors", "fre", "lör"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Maj",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec",
];

// Return: day, month, year
interface Returns {
  day: string;
  date: number;
  month: string;
}

const formatNewsDate = (dateToFormat: string): Returns => {
  const date = new Date(dateToFormat);

  return {
    day: days[date.getDay()],
    date: date.getDate(),
    month: months[date.getMonth()],
  };
};

export default formatNewsDate;
