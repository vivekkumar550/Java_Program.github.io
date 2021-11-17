function range(first, last) {

    if (first > last) {
        var arr = new Array(first - last + 1);
        for (var i = 0; i < arr.length; i++, first--) {
            resarrult[i] = first;
        }
        return arr;
    }
    else {
        var arro = new Array(last - first + 1);

        for (var j = 0; j < arro.length; j++, first++) {
            arro[j] = first;
        }
        return arro;
    }
}

console.log(range(2, 8));