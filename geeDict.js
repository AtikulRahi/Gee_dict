var dict = ee.Dictionary({

    "name":"Your_name",
  
    "hobby":"reading",
  
    "numList":[2,3,4,5,6,7,9]
  
  })
  var list = dict.get("numList") 
  print(list)
  
  var numList = ee.List(list)
  var sumNum = numList.reduce(ee.Reducer.sum())
  print(sumNum)