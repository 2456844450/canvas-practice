

//数组扁平化，去重，排序
// let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
// let flatArr = arr.flat(4)
// let newArr = Array.from(new Set(flatArr))
// let Arr = newArr.sort((a,b) => (a-b))

// console.log(Arr)

//求两数组交集
// var intersection = function (num1, num2) {
//   console.log([...new Set(num1.filter(item => num2.includes(item)))])
// }

// intersection([1,3,5,2,2],[1,13,3])

//求多个数组交集
// var intersection = function(...args) {
//   if (args.length === 1) {
//     return args[0]
//   }
//   if (args.length === 0) {
//     return []
//   }
//   return [...new Set(args.reduce((result, arg) => {
//     return result.filter(item => arg.includes(item))
//   }))]
// }

// console.log(intersection([1,3,5,2,2],[1,13,3],[1,2,4,8]))

//合并两个有序数组
// var merge = function(nums1, m, nums2, n) {
//   let len1 = m - 1,
//       len2 = n - 1,
//       len = m + n - 1
//   while(len2 >= 0) {
//       if(len1 < 0) {
//           nums1[len--] = nums2[len2--]
//           continue
//       }
//       nums1[len--] = nums1[len1] >= nums2[len2] ? nums1[len1--]: nums2[len2--]
//   }
// };

//递归实现深拷贝
// var deepclone = function (obj) {
//   let returnobj = {}
//   if (typeof obj === 'object') {
//     //深拷贝
//     Object.key(obj).forEach(key => {
//       if(typeof obj[key] === 'object') {
//         returnobj[key] = deepclone(obj[key])
//       }
//       returnobj[key] = obj[key]
//     })
//     return returnobj
//   }
//   return obj
// }