// var user = {
//     name: 'Dimych',
//     age:12,
//     address: {
//         city: {
//             title: 'Minsk'
//         }
//     }
// }

// export const usersArray = ['Dimych', 'Natasha', 'Valera', 'Katya']
export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

// users[1]
var user = {id: 100500, name: 'Igor'}
users[user.id] = user;
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: 'Dimych'},
    {id: 3232312, name: 'Natasha'},
    {id: 1212, name: 'Valera'},
    {id: 1, name: 'Katya'}
]
// usersArray.find(u => u.id === 1)
// var usersCopy = [...usersArray.filter(),user]
// var usersArray = usersArray.filter(u => u.id !== user.id)