import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { Agenda, AgendaSchedule, DateData } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import AvatarText from 'react-native-paper/lib/typescript/src/components/Avatar/AvatarText';

const timeToString = (time: number) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};


export function Calendar() {

  const [items, setItems] : any = useState({});

  const loadItems = (day : DateData) => {
    // const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              // height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);

    }, 1000);
  };


  const renderItem = (item : any) => {

    return (
      <TouchableOpacity>
        <Card>
          <Card.Content>
            <View style={styles.CardItem}>
              <Text>{item.name}</Text>
              <Avatar.Text label='I'/>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>)
  }

  return (
    <View style={styles.containerBody}>
      <View style={styles.containerTop}>
        <Header title='Agendamento' />
      </View>
      <View style={styles.containerAgenda}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2023-05-16'} 
          renderItem={renderItem}  
        />
      </View>
    </View>

  );
}

