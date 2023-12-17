
// class FoodRatings {
//     var foods: [String] = []
//     var cuisines: [String] = []
//     var ratings: [Int] = []

//     init(_ foods: [String], _ cuisines: [String], _ ratings: [Int]) {
//         self.foods = foods
//         self.cuisines = cuisines
//         self.ratings = ratings
//     }
    
//     func changeRating(_ food: String, _ newRating: Int) {
//         var idx = 0
//         for i in 0..<foods.count {
//             if (foods[i] == food) {
//                 idx = i
//                 break
//             }
//         }

//         ratings[idx] = newRating
//     }
    
//     func highestRated(_ cuisine: String) -> String {
//         var rat = 0
//         var food = ""

//         for i in 0..<foods.count {
//             if (cuisines[i] == cuisine) {
//                 if (ratings[i] > rat) {
//                     rat = ratings[i]
//                     food = foods[i]
//                 } else if (ratings[i] == rat) {
//                     if (foods[i] < food) { food = foods[i] }
//                 }
//             }
//         }

//         return food
//     }
// }


// class FoodRatings {
//     var foods: [String:Int] = [:]
//     var cuisines: [String:[String]] = [:]

//     init(_ foods: [String], _ cuisines: [String], _ ratings: [Int]) {
//         // var f: [String:Int] = [:]
//         // var c: [String:[String]] = [:]

//         // for i in 0..<foods.count {
//         //     f[foods[i]] = ratings[i]
//         //     if (c[cuisines[i]] == nil) {
//         //         c[cuisines[i]] = [foods[i]]
//         //     } else {
//         //         c[cuisines[i]]!.append(foods[i])
//         //     }
//         // }

//         // self.foods = f
//         // self.cuisines = c

//         for i in 0..<foods.count {
//             self.foods[foods[i]] = ratings[i]
//             self.cuisines[cuisines[i], default: []].append(foods[i])
//         }
//     }
    
//     func changeRating(_ food: String, _ newRating: Int) {
//         foods[food] = newRating
//     }
    
//     func highestRated(_ cuisine: String) -> String {
//         // var rat = 0
//         // var foodname = ""

//         // for food in cuisines[cuisine]! {
//         //     if (foods[food]! > rat) {
//         //         rat = foods[food]!
//         //         foodname = food
//         //     } else if (foods[food]! == rat && food < foodname) {
//         //         foodname = food
//         //     }
//         // }

//         // return foodname

// // if let foodsInCuisine = cuisines[cuisine],
// //             let highestRatedFood = foodsInCuisine.max(by: {
// //                 foods[$0] ?? 0 < foods[$1] ?? 0 ||
// //                 (foods[$0] ?? 0 == foods[$1] ?? 0 && $0 < $1)
// //             }) {
// //             return highestRatedFood
// //         }

// //         // Handle the case where either cuisines[cuisine] is nil or max() returns nil
// //         return "" 
//     }
// }

//  class FoodRatings {
//     var foodData: [String: (cuisine: String, rating: Int)] = [:]

//     init(_ foods: [String], _ cuisines: [String], _ ratings: [Int]) {
//         guard foods.count == cuisines.count && foods.count == ratings.count else {
//             fatalError("Input arrays must have the same length")
//         }

//         for i in 0..<foods.count {
//             foodData[foods[i]] = (cuisine: cuisines[i], rating: ratings[i])
//         }
//     }

//     func changeRating(_ food: String, _ newRating: Int) {
//         guard let foodInfo = foodData[food] else {
//             return // Food not found
//         }

//         foodData[food] = (cuisine: foodInfo.cuisine, rating: newRating)
//     }

//     func highestRated(_ cuisine: String) -> String {
//         var highestRatedFood = ""
//         var highestRating = Int.min

//         for (food, info) in foodData {
//             if info.cuisine == cuisine {
//                 if info.rating > highestRating {
//                     highestRating = info.rating
//                     highestRatedFood = food
//                 } else if info.rating == highestRating && food < highestRatedFood {
//                     highestRatedFood = food
//                 }
//             }
//         }

//         return highestRatedFood
//     }
// }

/**
 * Your FoodRatings object will be instantiated and called as such:
 * let obj = FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food, newRating)
 * let ret_2: String = obj.highestRated(cuisine)
 */

 class FoodRatings {
    var foods: [String: (cuisine: String, rating: Int)] = [:]

    init(_ foods: [String], _ cuisines: [String], _ ratings: [Int]) {
        for i in 0..<foods.count {
            self.foods[foods[i]] = (cuisine: cuisines[i], rating: ratings[i])
        }
    }
    
    func changeRating(_ food: String, _ newRating: Int) {
        foods[food]!.rating = newRating
    }
    
    func highestRated(_ cuisine: String) -> String {
        var rating = 0
        var name = ""

        for (food, info) in foods {
            if (info.cuisine == cuisine) {
                if (info.rating > rating) {
                    rating = info.rating
                    name = food
                } else if (info.rating == rating && food < name) {
                    name = food
                }
            }
        }

        return name
    }
}