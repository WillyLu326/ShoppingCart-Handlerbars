/**
 * Created by zhenglu on 12/30/16.
 */
const Product = require('../models/product'),
      mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mercury');

const products = [
    new Product({
        imagePath: 'http://cdn3.dualshockers.com/wp-content/uploads/2015/06/devil_may_cry_4_special_edition_1.jpg',
        title: 'Devil May Cry',
        description: 'Devil May Cry (Japanese: デビル メイ クライ Hepburn: Debiru Mei Kurai?) is a video game series developed by Capcom and created by Hideki Kamiya. Originally intended to be a sequel in Capcoms Resident Evil series, in development it became such a radical departure from the series style that it was developed into a new property entirely.',
        price: 12
    }),
    new Product({
        imagePath: 'http://cdn3.dualshockers.com/wp-content/uploads/2015/06/devil_may_cry_4_special_edition_1.jpg',
        title: 'Devil May Cry',
        description: 'Devil May Cry (Japanese: デビル メイ クライ Hepburn: Debiru Mei Kurai?) is a video game series developed by Capcom and created by Hideki Kamiya. Originally intended to be a sequel in Capcoms Resident Evil series, in development it became such a radical departure from the series style that it was developed into a new property entirely.',
        price: 12
    }),
    new Product({
        imagePath: 'http://cdn3.dualshockers.com/wp-content/uploads/2015/06/devil_may_cry_4_special_edition_1.jpg',
        title: 'Devil May Cry',
        description: 'Devil May Cry (Japanese: デビル メイ クライ Hepburn: Debiru Mei Kurai?) is a video game series developed by Capcom and created by Hideki Kamiya. Originally intended to be a sequel in Capcoms Resident Evil series, in development it became such a radical departure from the series style that it was developed into a new property entirely.',
        price: 12
    }),
    new Product({
        imagePath: 'http://cdn3.dualshockers.com/wp-content/uploads/2015/06/devil_may_cry_4_special_edition_1.jpg',
        title: 'Devil May Cry',
        description: 'Devil May Cry (Japanese: デビル メイ クライ Hepburn: Debiru Mei Kurai?) is a video game series developed by Capcom and created by Hideki Kamiya. Originally intended to be a sequel in Capcoms Resident Evil series, in development it became such a radical departure from the series style that it was developed into a new property entirely.',
        price: 12
    })
];

for (let i = 0; i < products.length; ++i) {
    products[i].save()
        .then( () => mongoose.disconnect() );
}