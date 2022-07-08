export interface TextResourceProps {
  hello: string;
  addNew: {
    action: string;
  };
  create: {
    action: string;
    succeed: string;
  };
  update: {
    action: string;
    succeed: string;
  };
  delete: {
    action: string;
    succeed: string;
  };
  form: {
    required: {
      label: string;
      error: string;
    };
    email: {
      error: string;
    };
    minLength: string;
    maxLength: string;
    min: string;
    max: string;
  };
  list: {
    empty: string;
  };
  loading: string;
  uploadedFile: string;
  exceptionErrorOccurred: string;
  brands: {
    gitHub: string;
  };
  page: {
    auth: {
      signIn: {
        title: string;
      };
      setting: {
        title: string;
      };
    };
    profiles: {
      edit: {
        title: string;
      };
    };
  };
  part: {
    auth: {
      signOut: {
        title: string;
        action: string;
      };
      signIn: {
        action: string;
      };
    };
  };
  model: {
    auth: {
      email: string;
    };
  };
}
