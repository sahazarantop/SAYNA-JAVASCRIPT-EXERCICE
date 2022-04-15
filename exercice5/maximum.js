function maximum(parametre) {
        long = parametre.length
        long
        parametre

        for (let i = 0; i <= long; i++) {
                if (parametre[i] > parametre[i+1]) {
                        console.log('h');
                        x = parametre[i]
                        parametre[i] = parametre[i+1]
                        parametre[i+1] = x
                }
        }
        console.log(parametre);
}

maximum([2,1,0])
