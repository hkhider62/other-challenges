function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);

    if (evenNumbers.length === 0) {
        return 0;
    }

    // Reduce to calculate sum of even numbers
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

    const average = sum / evenNumbers.length;

    return average;  }

    //challenge 2

    function findLongestWord(words) {
        if (words.length === 0) {
            return null; 
        }
    
        const longestWord = words.reduce((longest, currentWord) => {
            return currentWord.length > longest.length ? currentWord : longest;
        }, "");
    
        return longestWord;
    }

    //challenge 3
    function averagePages(books) {       
        const pagesArray = books.map(book => book.pages);
    
        const totalPages = pagesArray.reduce((acc, curr) => acc + curr, 0);
    
        // Calculate the average number of pages
        const average = totalPages / books.length;
    
        return average;
    }

    //challenge 4
    function countPeopleByCity(people) {
        const countByCity = people.reduce((acc, person) => {
            // Extract the city from each person object
            const city = person.city;
            if (acc[city]) {
                acc[city]++;
            } else {
            
                acc[city] = 1;
            }
            return acc;
        }, {});
    
        return countByCity;
    }
    