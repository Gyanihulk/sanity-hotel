import {defineField} from 'sanity'
export default defineField({
  name: 'room',
  title: 'Room',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'price', type: 'number'},
    {name: 'maxPeople', type: 'number'},
    {name: 'desc', type: 'text'},
    {
      name: 'roomNumbers',
      type: 'array',
      of: [{type: 'object', fields: [
        {name: 'number', type: 'number'},
        {name: 'unavailableDates', type: 'array', of: [{type: 'date'}]}
      ]}]
    }
  ]
})