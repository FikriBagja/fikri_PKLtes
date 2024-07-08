const bentukArray = [
    { backgroundColor: 'gray', borderRadius: '0' },
    { backgroundColor: 'red', borderRadius: '50%' },
    { backgroundColor: 'blue', borderRadius: '0' },
    { backgroundColor: 'green', borderRadius: '50%' }
    ];

    let i = 0;
        function ubahbentuk() {
            i = (i + 1) % bentukArray.length;
            const elemenbentuk = document.getElementById('bentuk');
            const bentukBerikutnya = bentukArray[i];
            elemenbentuk.style.backgroundColor = bentukBerikutnya.backgroundColor;
            elemenbentuk.style.borderRadius = bentukBerikutnya.borderRadius;
        }
