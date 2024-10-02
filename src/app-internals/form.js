/**
 * We're just hiding this form HTML here to make it cleaner as
 * it is out of the workshop scope.
 */
export default `
  <div class="field">
    <label class="label">Filter</label>
    <div class="control">
      <div class="select">
        <select name="url">
          <option value="https://demo3059429.mockable.io/vehicles">Long list</option>
          <option value="https://demo7966525.mockable.io/vehicles-short">Short list</option>
        </select>
      </div>
      <div class="select">
        <select name="limit">
          <option value="8">8 items</option>
          <option value="6">6 items</option>
          <option value="4" selected>4 items</option>
          <option value="2">2 items</option>
        </select>
      </div>
      <div class="select">
        <select name="show-details">
          <option value="true">Show details</option>
          <option value="">Hide details</option>
        </select>
      </div>
    </div>
  </div>
`;
