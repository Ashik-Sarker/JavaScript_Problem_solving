function bestFriend(friends) {
    l = 0;
    name = '';

    for (friend of friends){
        if (friend.length > l)
            name = friend;
            l=friend.length
    }
    return name;
}

console.log(bestFriend(['ashik', 'ashik sarker','sarker']));