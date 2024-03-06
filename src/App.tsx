import { Input, Button, FormText } from 'reactstrap';
import { Form, useForm, connect } from 'formfusion';

const MyForm = () => {
  const config = useForm({
    onSubmit: (e: object) => {
      console.log('Success ' + JSON.stringify(e));
    },
    validateOnChange: true,
  });

  return (
    <Form config={config} className="m-3">
      <Input
        {...connect(config, 'alphabetic')}
        invalid={Boolean(config.errors.firstName)}
        id="firstName"
        name="firstName"
      />
      <FormText>{config.errors.firstName}</FormText>
      <br />
      <Button color="primary" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
