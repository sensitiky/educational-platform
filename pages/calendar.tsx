import { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const generateCalendarMatrix = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startDay = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    const weeks: number[][] = [];
    let week: number[] = [];

    for (let i = 0; i < startDay; i++) {
      week.push(0);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }

    if (week.length > 0) {
      while (week.length < 7) {
        week.push(0);
      }
      weeks.push(week);
    }

    while (weeks.length < 6) {
      weeks.push([0, 0, 0, 0, 0, 0, 0]);
    }

    return weeks;
  };

  const weeks = generateCalendarMatrix(currentDate);

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDay(null);
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDay(null);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <View className="w-[95%] p-4 bg-white rounded-xl elevation-5 my-2 self-center">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-2">
        <TouchableOpacity onPress={prevMonth} className="p-2">
          <Text className="text-2xl text-[#6200EE] font-semibold">{'‹'}</Text>
        </TouchableOpacity>
        <Text className="text-lg font-bold text-gray-800">
          {currentDate.toLocaleString('default', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <TouchableOpacity onPress={nextMonth} className="p-2">
          <Text className="text-2xl text-[#6200EE] font-semibold">{'›'}</Text>
        </TouchableOpacity>
      </View>

      {/* Days of the week */}
      <View className="flex-row justify-between border-b pb-2 mb-2">
        {DAYS_OF_WEEK.map((day) => (
          <Text
            key={day}
            className="flex-1 text-center font-semibold text-[#6200EE]"
          >
            {day}
          </Text>
        ))}
      </View>

      {/* Calendar body */}
      <View>
        {weeks.map((week, weekIndex) => (
          <View key={`week-${weekIndex}`} className="flex-row mb-1">
            {week.map((day, dayIndex) => {
              const isWeekend = dayIndex === 0 || dayIndex === 6;
              const selected = day === selectedDay;
              const today = isToday(day);

              return day !== 0 ? (
                <TouchableOpacity
                  key={`day-${dayIndex}-${day}`}
                  className={`flex-1 items-center justify-center p-2 m-0.5 rounded-lg 
                    ${selected || today ? 'bg-[#722f37]' : 'bg-gray-200'}
                    ${isWeekend && !selected && !today ? 'bg-red-100' : ''}
                    elevation-2
                  `}
                  onPress={() => setSelectedDay(day)}
                >
                  <Text
                    className={`text-base 
                      ${
                        selected || today
                          ? 'text-white font-bold'
                          : 'text-gray-700'
                      }
                      ${isWeekend && !selected && !today ? 'text-red-500' : ''}
                    `}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={`empty-${dayIndex}-${weekIndex}`}
                  className="flex-1 items-center justify-center p-2 m-0.5 rounded-lg bg-transparent"
                >
                  <Text></Text>
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}
