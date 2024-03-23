'use client';

import { toast } from 'react-toastify';

// a basic error catcher for wrapping functions
// containing ajax requests
export function catch_async_error(
  fn: Function,
  options?: {
    hideErrorAlert?: boolean;
    successMessage?: { title?: string; description?: string };
  }
) {
  return function (e?: any, passthrough?: any) {
    // using a normal function rather than an arrow function
    // in order to have access to
    // this particular functions arguments
    fn(...arguments)
      .then((el: any) => {
        if (options?.successMessage) {
          toast.success(options?.successMessage?.description);
        }
      })
      .catch((err: any) => {
        console.error(err);
        console.error(err.message);
        console.log(err.response);
        if (!options?.hideErrorAlert) {
          if (err.response && err.response.data.message) {
            // toast({
            //   title: 'Oops... something went wrong',
            //   description: err.response.data.message,
            //   status: 'error'
            // });
            toast.error(err.response.data.message);
          } else {
            // toast({
            //   title: 'Oops... something went wrong',
            //   description:
            //     'Please hang tight while we try to figure out what went wrong',
            //   status: 'error'
            // });
            toast.error('Oops... something went wrong');
          }
        }
        e && e.target ? (e.target.disabled = false) : null;
      });
  };
}
