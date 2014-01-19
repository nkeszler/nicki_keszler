array = [[1,1],[2,2],[3,3],[4,4],[5,5]]
puts array.inject([]){|array, value| array << value[0] + value[1] }.inspect

