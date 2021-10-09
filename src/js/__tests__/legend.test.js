import healthColor from '../legend';

test('should healthColor to be green', () => {
  const unit = {
    name: 'Маг',
    health: 90
  };

  const unitColor = healthColor(unit);
  expect(unitColor).toEqual('зелёный');
});

test('should healthColor to be yellow', () => {
  const unit = {
    name: 'Воин',
    health: 45
  };

  const unitColor = healthColor(unit);
  expect(unitColor).toEqual('жёлтый');
});

test('should healthColor to be red', () => {
  const unit = {
    name: 'Танк',
    health: 10
  };

  const unitColor = healthColor(unit);
  expect(unitColor).toEqual('красный');
});

