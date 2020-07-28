import { observable, configure, action } from 'mobx';

configure({ enforceActions: 'observed' });

type NewUser = {
  email: string;
  password: string;
  passwordConfirm: string;
  termsOfUse: boolean;
};

type OldUser = {
  email: string;
  password: string;
};

class Store {
  private apiBase: string = 'https://dev.addictivelearning.io/api/v1';

  @observable newUser: NewUser = {
    email: '',
    password: '',
    passwordConfirm: '',
    termsOfUse: false,
  };

  @observable oldUser: OldUser = {
    email: '',
    password: '',
  };

  @observable signInSuccess: number = 0;

  @action changeEmail = (email: string): void => {
    this.newUser.email = email;
  };

  @action changePassword = (password: string): void => {
    this.newUser.password = password;
  };

  @action changePasswordConfirm = (passwordConfirmation: string): void => {
    this.newUser.passwordConfirm = passwordConfirmation;
  };

  @action changeTermsOfUse = (termsOfUse: boolean): void => {
    this.newUser.termsOfUse = termsOfUse;
  };

  @action changeSignInEmail = (email: string) => {
    this.oldUser.email = email;
  };

  @action changeSignInPassword = (password: string) => {
    this.oldUser.password = password;
  };

  @action changeSignInSuccess = (value: number) => {
    this.signInSuccess = value;
  };

  @action.bound
  signUp = (): void => {
    const data = new FormData();

    data.append('email', this.newUser.email);
    data.append('password', this.newUser.password);
    data.append('password_confirmation', this.newUser.passwordConfirm);
    data.append('terms_of_use', this.newUser.termsOfUse);

    if (
      this.newUser.password === this.newUser.passwordConfirm &&
      this.newUser.termsOfUse
    ) {
      fetch(`${this.apiBase}/register`, {
        method: 'POST',
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            console.log('Sign Up:', response.status);
          } else {
            console.log('Response status:', response.status);
          }
        })
        .catch((error) => console.log('Error:', error));
    }
  };

  @action.bound
  signIn = (): void => {
    const data = new FormData();

    data.append('email', this.oldUser.email);
    data.append('password', this.oldUser.password);

    if (this.oldUser.email && this.oldUser.password) {
      fetch(`${this.apiBase}/login`, {
        method: 'POST',
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            this.changeSignInSuccess(response.status);
            console.log('Sign In:', response.status);
            console.log('Sign In Success:', this.signInSuccess);
          } else {
            console.log('Response status:', response.status);
          }
        })
        .catch((error) => console.log('Error:', error));
    }
  };

  @action.bound
  logOut = (): void => {
    fetch(`${this.apiBase}/logout`, {
      method: 'POST',
    })
      .then((response) => {
        if (response.status === 200) {
          this.changeSignInSuccess(0);
          console.log('Log Out:', response.status);
        } else {
          console.log('Response status:', response.status);
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  @action.bound
  getCurrentUser = (): void => {
    fetch(`${this.apiBase}/current`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.status === 200) {
          console.log('Get Current User', response.status);
        } else {
          console.log('Response status:', response.status);
        }
      })
      .catch((error) => console.log('Error:', error));
  };
}

const appStore: Store = new Store();

export { Store, appStore };
