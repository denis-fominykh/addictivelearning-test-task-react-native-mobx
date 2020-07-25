import { observable, configure, action, runInAction } from 'mobx';
import axios from 'axios';

configure({ enforceActions: 'observed' });

class Store {
  private apiBase: string = 'https://dev.addictivelearning.io/api/v1';

  @observable email: string = '';
  @observable password: string = '';
  @observable passwordConfirmation: string = '';
  @observable termsOfUse: boolean = false;

  @observable signUnSuccess: boolean = false;
  @observable signInSuccess: boolean = false;
  @observable logOutSuccess: boolean = true;

  @action changeEmail = (email: string): void => {
    this.email = email;
  };

  @action changePassword = (password: string): void => {
    this.password = password;
  };

  @action changePasswordConfirmation = (passwordConfirmation: string): void => {
    this.passwordConfirmation = passwordConfirmation;
  };

  @action changeTermsOfUse = (termsOfUse: boolean): void => {
    this.termsOfUse = termsOfUse;
  };

  @action.bound
  signUp = (): void => {
    const data = new FormData();

    data.append('email', this.email);
    data.append('password', this.password);
    data.append('password_confirmation', this.passwordConfirmation);
    data.append('terms_of_use', this.termsOfUse);

    axios
      .post(`${this.apiBase}/register`, {
        data: data,
      })
      .then((response) => {
        if (response.status === 201) {
          runInAction(() => {
            this.signUnSuccess = true;
          });
          console.log(response);
        } else {
          console.log('Response status:', response.status);
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  @action.bound
  signIn = (): void => {
    const data = new FormData();

    data.append('email', this.email);
    data.append('password', this.password);

    axios
      .post(`${this.apiBase}/login`, {
        data: data,
      })
      .then((response) => {
        if (response.status === 201) {
          runInAction(() => {
            this.signInSuccess = true;
            this.logOutSuccess = false;
          });
          console.log(response);
        } else {
          console.log('Response status:', response.status);
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  @action.bound
  logOut = (): void => {
    axios
      .post(`${this.apiBase}/logout`)
      .then((response) => {
        if (response.status === 201) {
          runInAction(() => {
            this.signInSuccess = false;
            this.logOutSuccess = true;
          });
          console.log(response);
        } else {
          console.log('Response status:', response.status);
        }
      })
      .catch((error) => console.log('Error:', error));
  };

  @action.bound
  getCurrentUser = (): void => {
    axios
      .get(`${this.apiBase}/current`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.log('Response status:', response.status);
        }
      })
      .catch((error) => console.log('Error:', error));
  };
}

const appStore: Store = new Store();

export { Store, appStore };
