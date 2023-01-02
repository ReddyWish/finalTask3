const deleteDuplicates = arr => {
    return Array.from(new Set(arr))
}

console.log(deleteDuplicates([1, 1, 2, 2, 4, 2, 3, 7, 3]))