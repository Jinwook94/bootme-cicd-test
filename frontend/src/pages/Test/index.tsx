import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import React from 'react';

const access_key: string = process.env.AWS_SDK_CREDENTIAL_ACCESS_KEY!;
const secret_key: string = process.env.AWS_SDK_CREDENTIAL_SECRET_KEY!;

const Test = () => {
  const client = new SecretsManagerClient({
    region: 'ap-northeast-2',
    credentials: {
      accessKeyId: access_key,
      secretAccessKey: secret_key,
    },
  });

  const secret_name = 'prod/React';

  const getSecrets = async () => {
    try {
      const response = await client.send(
        new GetSecretValueCommand({
          SecretId: secret_name,
          VersionStage: 'AWSCURRENT',
        })
      );
      console.log(response);
      console.log(response.SecretString);
    } catch (error) {
      console.log(error);
      // For a list of exceptions thrown, see
      // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
      throw error;
    }
  };
  return <div onClick={() => getSecrets()}>Secrets</div>;
};

export default Test;
