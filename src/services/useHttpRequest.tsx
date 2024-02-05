// curl -X POST \
//   https://training.nerdbord.io/api/v1/panini-creator/order \
//   -H 'Authorization: "secret_token"' \
//   -H 'Content-Type: application/json' \
//   -d '{
//     "sandwichName": "My sandwich",
//     "cutlery": false,
//     "napkins": true,
//     "base": {
//       "bread": "FULL GRAIN",
//       "cheese": ["GOUDA", "EDAM"],
//       "meat": ["SALAMI NAPOLI"],
//       "dressing": ["RANCH"],
//       "vegetables": ["SALAD", "PICKLES"]
//     },
//     "extras": {
//       "egg": ["OMELET"],
//       "spreads": ["BUTTER"],
//       "serving": "GRILLED",
//       "topping": null
//     }
//   }'

export{}