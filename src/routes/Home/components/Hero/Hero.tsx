import { useRouter } from 'next/router';

import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1587785580224-ff32e30978de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3089&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.md,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

const Hero = () => {
  const { classes } = useStyles();

  const { push } = useRouter();

  const handleTrackClick = () => {
    push('/track/laundry');
  };

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          Saatnya meninggalkan rutinitas mencuci baju sendiri.
          <br />
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Hemat 4 Jam per minggu
          </Text>{' '}
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Joyful Laundry dapat membantu mengambil, membersihkan, dan mengantar
          laundry kamu!
        </Text>

        <Button
          variant="gradient"
          gradient={{ from: 'pink', to: 'yellow' }}
          size="xl"
          className={classes.control}
          mt={40}
          onClick={handleTrackClick}
        >
          Lacak
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
