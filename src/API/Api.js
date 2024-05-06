export const JwtAuthToken = (user) => {
    const currentUser = {
        email: user.email,
    }
    console.log(currentUser);

    fetch('https://genius-car-server-five-xi.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('Genius-Token', data.token);
            // navigate(from, { replace: true })
        })

        .catch(error => console.error(error))
}