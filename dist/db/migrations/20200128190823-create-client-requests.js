'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Client_Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      domestic_worker_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Client_Requests');
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYi9taWdyYXRpb25zLzIwMjAwMTI4MTkwODIzLWNyZWF0ZS1jbGllbnQtcmVxdWVzdHMuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVwIiwicXVlcnlJbnRlcmZhY2UiLCJTZXF1ZWxpemUiLCJjcmVhdGVUYWJsZSIsImlkIiwiYWxsb3dOdWxsIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsImNsaWVudF9pZCIsImRvbWVzdGljX3dvcmtlcl9pZCIsImNyZWF0ZWRBdCIsIkRBVEUiLCJ1cGRhdGVkQXQiLCJkb3duIiwiZHJvcFRhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLEVBQUUsRUFBRSxZQUFDQyxjQUFELEVBQWlCQyxTQUFqQixFQUErQjtBQUNqQyxXQUFPRCxjQUFjLENBQUNFLFdBQWYsQ0FBMkIsaUJBQTNCLEVBQThDO0FBQ25EQyxNQUFBQSxFQUFFLEVBQUU7QUFDRkMsUUFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFRkMsUUFBQUEsYUFBYSxFQUFFLElBRmI7QUFHRkMsUUFBQUEsVUFBVSxFQUFFLElBSFY7QUFJRkMsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNPO0FBSmQsT0FEK0M7QUFPbkRDLE1BQUFBLFNBQVMsRUFBRTtBQUNURixRQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ087QUFEUCxPQVB3QztBQVVuREUsTUFBQUEsa0JBQWtCLEVBQUU7QUFDbEJILFFBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQURFLE9BVitCO0FBYW5ERyxNQUFBQSxTQUFTLEVBQUU7QUFDVFAsUUFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVEcsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNXO0FBRlAsT0Fid0M7QUFpQm5EQyxNQUFBQSxTQUFTLEVBQUU7QUFDVFQsUUFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVEcsUUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNXO0FBRlA7QUFqQndDLEtBQTlDLENBQVA7QUFzQkQsR0F4QmM7QUF5QmZFLEVBQUFBLElBQUksRUFBRSxjQUFDZCxjQUFELEVBQWlCQyxTQUFqQixFQUErQjtBQUNuQyxXQUFPRCxjQUFjLENBQUNlLFNBQWYsQ0FBeUIsaUJBQXpCLENBQVA7QUFDRDtBQTNCYyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge1xuICB1cDogKHF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemUpID0+IHtcbiAgICByZXR1cm4gcXVlcnlJbnRlcmZhY2UuY3JlYXRlVGFibGUoJ0NsaWVudF9SZXF1ZXN0cycsIHtcbiAgICAgIGlkOiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgY2xpZW50X2lkOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgZG9tZXN0aWNfd29ya2VyX2lkOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgY3JlYXRlZEF0OiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICB9LFxuICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIGRvd246IChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXJ5SW50ZXJmYWNlLmRyb3BUYWJsZSgnQ2xpZW50X1JlcXVlc3RzJyk7XG4gIH1cbn07Il19