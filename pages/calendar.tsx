import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

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

  return (
    <View style={styles.calendar}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'‹'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>
          {currentDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </Text>
        <TouchableOpacity onPress={nextMonth} style={styles.navButton}>
          <Text style={styles.navButtonText}>{'›'}</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.week, styles.daysHeader]}>
        {DAYS_OF_WEEK.map((day) => (
          <Text key={day} style={[styles.dayText, styles.daysHeaderText]}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.body}>
        {weeks.map((week, weekIndex) => (
          <View key={`week-${weekIndex}`} style={styles.week}>
            {week.map((day, dayIndex) => {
              const isWeekend = dayIndex === 0 || dayIndex === 6;
              const isSelected = day === selectedDay;
              return day !== 0 ? (
                <TouchableOpacity
                  key={`day-${dayIndex}-${day}`}
                  style={[
                    styles.day,
                    isSelected && styles.selectedDay,
                    isWeekend && styles.weekendDay,
                  ]}
                  onPress={() => setSelectedDay(day)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isSelected && styles.selectedDayText,
                      isWeekend && styles.weekendDayText,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ) : (
                <View
                  key={`empty-${dayIndex}-${weekIndex}`}
                  style={[styles.day, styles.empty]}
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

const styles = StyleSheet.create({
  calendar: {
    width: width * 0.95,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  navButton: {
    padding: 8,
  },
  navButtonText: {
    fontSize: 24,
    color: '#6200EE',
    fontWeight: '600',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },
  daysHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingBottom: 8,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  daysHeaderText: {
    fontWeight: '600',
    color: '#6200EE',
    textAlign: 'center',
    flex: 1,
  },
  body: {
    // Mantener el cuerpo sin estilos específicos
  },
  week: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  day: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
  },
  empty: {
    backgroundColor: 'transparent',
  },
  dayText: {
    fontSize: 16,
    color: '#333333',
  },
  selectedDay: {
    backgroundColor: '#6200EE',
  },
  selectedDayText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  weekendDay: {
    backgroundColor: '#ffe6e6',
  },
  weekendDayText: {
    color: '#ff3333',
  },
});
