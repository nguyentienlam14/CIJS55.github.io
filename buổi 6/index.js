import './components/create-post'
import './components/header'
import './components/input-wrapper'
import './screens/login-screen'
import './screens/register-screen'
import './screens/story-screen'

export function redirect(screenName, userName) {
    if (screenName === 'login') {
        document.querySelector('#app').innerHTML = `<login-screen></login-screen>`;

    } else if (screenName === 'register') {
        document.querySelector('#app').innerHTML = `<register-screen></register-screen>`;
    } else if (screenName === 'story') {
        document.querySelector('#app').innerHTML = `<story-screen></story-screen>`;
    }
}


auth.onAuthStateChanged((user) => {
    if (user) {
        const userLogin = {
            email: user.email,
            displayName: user.displayName,
            id: user.uid
        }

        window.currentUser = userLogin;
        redirect('story');
    } else {
        redirect('login');
    }
});