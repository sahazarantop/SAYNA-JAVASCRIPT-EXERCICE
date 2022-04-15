function reverseIterate(params) {
        let x = params.length

        for (let i = x - 1; i >= 0; i--) {
                console.log(i);
                console.log(params[i]);
        }
}

reverseIterate("carrot");
reverseIterate("box");